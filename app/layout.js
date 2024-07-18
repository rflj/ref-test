
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import { Container } from 'react-bootstrap';
export const metadata = {
  title: "Ref-Test",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <Container style={{ marginTop: 25}}>
          {children}
        </Container>
      </body>
    </html>
  );
}
