let idIncrement = 0

function Component() {
  // This is used only for debugging
  this.id = idIncrement++

  this.inputs = {
    // a: { c, o }
  }
  this.outputs = {
    // q:
  }
  this.dependencies = new Set()

  this.trigger()
}
Component.prototype.trigger = function() {
  const existingInputs = Object.entries(this.inputs)
    .filter(([, value]) => value != undefined)
    .map(([key]) => key)

  if (!this.requiredInputs.every(r => existingInputs.includes(r))) return

  const oldValue = JSON.stringify(this.outputs)
  this.outputs = this.calculate(
    Object.fromEntries(
      Object.entries(this.inputs).map(([key, value]) => [
        key,
        value.c.outputs[value.o]
      ])
    )
  )
  // console.log(`${this.id}:`, this.outputs)
  if (oldValue != JSON.stringify(this.outputs)) {
    this.dependencies.forEach(dependency => {
      // console.log(`${this.id} notifies ${dependency.id}`)
      dependency.trigger()
    })
  }
}
Component.prototype.calculate = () => {
  throw Error('Component is abstract')
}
Component.prototype.connect = function(input, component, output) {
  component.dependencies.add(this)
  // console.log(`${this.id} depends on ${component.id}`)
  this.inputs[input] = {
    c: component,
    o: output
  }
  this.trigger()
}

export function Static(value = false) {
  let v = value
  Object.defineProperty(this, 'value', {
    get: () => v,
    set(newValue) {
      v = newValue
      this.trigger()
    }
  })
  Component.call(this)
}
Static.prototype = Object.create(Component.prototype)
Static.prototype.requiredInputs = []
Static.prototype.calculate = function() {
  return { q: this.value }
}

export function Not() {
  Component.call(this)
}
Not.prototype = Object.create(Component.prototype)
Not.prototype.requiredInputs = ['a']
Not.prototype.calculate = ({ a }) => ({ q: !a })

export function And() {
  Component.call(this)
}
And.prototype = Object.create(Component.prototype)
And.prototype.requiredInputs = ['a', 'b']
And.prototype.calculate = ({ a, b }) => ({ q: a && b })

export function Nand() {
  Component.call(this)
}
Nand.prototype = Object.create(Component.prototype)
Nand.prototype.requiredInputs = ['a', 'b']
Nand.prototype.calculate = ({ a, b }) => ({ q: !(a && b) })

export function Or() {
  Component.call(this)
}
Or.prototype = Object.create(Component.prototype)
Or.prototype.requiredInputs = ['a', 'b']
Or.prototype.calculate = ({ a, b }) => ({ q: a || b })

export function Nor() {
  Component.call(this)
}
Nor.prototype = Object.create(Component.prototype)
Nor.prototype.requiredInputs = ['a', 'b']
Nor.prototype.calculate = ({ a, b }) => ({ q: !(a || b) })

export function Xor() {
  Component.call(this)
}
Xor.prototype = Object.create(Component.prototype)
Xor.prototype.requiredInputs = ['a', 'b']
Xor.prototype.calculate = ({ a, b }) => ({ q: (a || b) && !(a && b) })
