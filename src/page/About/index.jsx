import React from 'react'
import PropTypes from 'prop-types'

import { Header, Section, Footer } from '../../components'
const About = props => {
  const coord = {
    center: [61.227040, 102.342258],
    zoom: 4,
  }
  return (
    <>
      <Header second />
      <Section type='description' title='О проекте' color='orange'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quo tempora aliquam debitis, numquam corporis nemo molestiae aperiam. Illum necessitatibus, ipsa explicabo vel asperiores alias reiciendis excepturi laudantium dolor quo.</p>
      </Section>
      <Footer />
    </>
  )
}

About.propTypes = {

}

export default About
