class Space_station extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('space_station')
      this.fields = this.fields.concat([
          'number',
          'capacity',
          'need'
         
      ])
    }
  }