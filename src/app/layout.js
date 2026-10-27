import Sidebar from "./components/Sidebar/Sidebar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="admin-container">
          <aside className="sidebar-wrapper">
            <Sidebar />
          </aside>
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
