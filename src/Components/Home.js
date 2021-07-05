import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section 
              title="Model S"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-s.jpg"
              leftbtnText = "CUSTOM ORDER"
              rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-y.jpg"
               leftbtnText = "CUSTOM ORDER"
               rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
              title="Model 3"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftbtnText = "CUSTOM ORDER"
              rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
              title="Model X"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-x.jpg"
              leftbtnText = "CUSTOM ORDER"
              rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
              title="Solar Panels"
              description="Order Online for Touchless Delivery"
              backgroundImg="solar-panel.jpg"
              leftbtnText = "CUSTOM ORDER"
              rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
              title="Solar Roof"
              description="Order Online for Touchless Delivery"
              backgroundImg="solar-roof.jpg"
              leftbtnText = "CUSTOM ORDER"
              rightbtnText = "EXISTING INVENTORY"
            />
            <Section 
              title="Accessories"
              description="Order Online for Touchless Delivery"
              backgroundImg="accessories.jpg"
              leftbtnText = "CUSTOM ORDER"
              
            />

        </Container>
    )
}

export default Home
const Container = styled.div`
`