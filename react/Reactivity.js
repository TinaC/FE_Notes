{
  let data = {
    price: 5,
    quantity: 2
  }
  // target is in global/window
  let target = null

  class Dep {
    constructor() {
      // the targets that are dependent, and should be run when notify() is called
      this.subscribers = []
    }

    // This replaces our record function
    depend() {
      // Only if there is a target & it's not aleady subscribed
      if(target && !this.subscribers.includes(target)) {
        this.subscribers.push(target)
      }
    }

    // Replaces our replay() function
    notify() {
      // Run our targets, or obserbers
      this.subscribers.forEach(sub => sub())
    }
  }

  Object.keys(data).forEach(key => {
    let internalValue = data[key]

    // Each property gets a dependency instance
    const dep = new Dep()

    Object.defineProperty(data, key, {
      get() {
        // 获取这个property时 push dependencies
        // Remember the target we're running
        dep.depend()
        return internalValue
      },
      set(newVal) {
        // 设置这个property时 call dependencies
        internalValue = newVal
        // Re-run stored function
        dep.notify()
      }
    })
  })

  function watcher(myFunc) {
    target = myFunc
    target()
    target = null
  }

  watcher(() => {
    // access data.price, trigger get(), push denpendencies
    data.total = data.price * data.quantity
  })

  watcher(() => {
    data.salePrice = data.price * 0.9
  })

  console.log(`total is ${data.total}`)
  data.price = 20
  console.log(`total is ${data.total}`)
  console.log(`salePrice is ${data.salePrice}`)
}