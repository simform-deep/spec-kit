import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "./components/ui/button"
import { useTheme } from "./components/theme-provider"

export function App() {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-lg min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">SDD Project ready!</h1>
          <p>We&apos;ve already added the button component.</p>
          <Button
            className="mt-2 hover:cursor-pointer"
            onClick={handleThemeToggle}
          >
            Theme {theme === "dark" ? <MoonIcon /> : <SunIcon />}{" "}
            {theme === "dark" ? "Dark" : "Light"}
          </Button>
        </div>
        <div>
          <div className="font-semibold">
            Are you a Mac user? Please install the necessary dependencies.
          </div>
          <div> &gt; brew install uv - Mac</div>
          <div className="font-semibold">
            Are you a Windows user? Please follow the Windows installation
            guide.
          </div>
          <div> &gt; winget install --id=astral-sh.uv -e - Window</div>
          <div className="font-semibold">Install packages.</div>
          <div> &gt; pnpm install</div>
          <div className="font-semibold">Run server.</div>
          <div> &gt; pnpm run dev</div>
        </div>
        <div>
          <div className="font-semibold">
            Once you have the dependencies installed, we can start the
            development.
          </div>
          <div>
            For document reference Click here to download a .pdf file{" "}
            <a
              href="/spec-kit.pdf"
              download
              className="text-blue-600 hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
