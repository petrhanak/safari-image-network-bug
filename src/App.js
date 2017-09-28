import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  // broken
  // https://stagingawayco.storage.googleapis.com/bg.jpg
  // bg.jpg 
  // logo.png
  // https://www.strv.com/dist/f247a7493984fd1ba2e4bb20785350c0.png
  
  // working (same file as logo.png)
  // https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
  // and others
  background: url('/bg.jpg');
`

const Abc = styled.div`
`

class Home extends PureComponent {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state ={
      foo: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      foo: 'bar'
    })
  }

  render() {
    const { foo } = this.state
    return <Wrap>
      <form onSubmit={this.handleSubmit}>
        <input />

        {/* broken */}
        {foo && <Abc>{foo}</Abc>}

        {/* working */}
        {/*{foo && <div>{foo}</div>}*/}
      </form>
    </Wrap>
  }
}

export default Home
