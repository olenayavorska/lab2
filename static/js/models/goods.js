class goods extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('goods')
      this.fields = this.fields.concat([
         'name',
          'code',
          'weight'
           // name, code,station_number, planetNumber, timeArrival, weight
         
         
      ])
    }
  }