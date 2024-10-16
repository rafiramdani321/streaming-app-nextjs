import { Navigation } from "./navigation"
import { Toggle } from "./toggle"
import { Wrapper } from "./Wrapper"

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  )
}