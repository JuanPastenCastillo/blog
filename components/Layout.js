import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { AccessibilityControls } from "./accessibility-controls/AccessibilityControls"

export const Layout = ({ children, setFontSize }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <AccessibilityControls setFontSize={setFontSize} />

      <Footer />
    </>
  )
}
