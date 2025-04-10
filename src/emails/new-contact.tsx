import type { Contact } from "@/app/actions/emails";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

console.log(baseUrl);

export const NewContactEmail = ({ email, message, name, subject }: Contact) => {
  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>
          {subject ??
            ((name ?? email)
              ? `New contact from ${name ?? email}`
              : "New contact")}
        </Preview>
        <Container style={container}>
          <Section>
            <Row>
              <Img src={`${baseUrl}/icon.png`} width="96" alt="cva logo" />
              <Text style={logoHeading}>Cardio Virtual Assistance</Text>
            </Row>
          </Section>

          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Tenes un contacto nuevo</Text>
              <Text style={paragraph}>Nombre: {name}</Text>
              <Text style={paragraph}>Email: {email}</Text>
              <Text style={paragraph}>Asunto: {subject}</Text>
              <Text style={paragraph}>Mensaje: </Text>
              <Text style={review}>{message}</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const logoHeading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#7F1D1D",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "500",
  color: "#450A0A",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#450A0A",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

export default function PreviewEmail() {
  return (
    <NewContactEmail
      name="John Doe"
      email="john.doe@example.com"
      subject="New contact"
      message={`I was interested in your product because I need it for my business.
         I want to develop a new feature for my website and I think your product could help me. 
         My address is 123 Main St, Anytown, USA. I need to know if you can help me with this.`}
    />
  );
}
