import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-blue-100 text-blue-950 p-12 rounded-full">
          <Container>
            <h1>Welcome to TopNote!</h1>
            <Text>Hello {name}</Text>
            <p>Thank you for joining TopNote! We hope you enjoy your stay.</p>
            <p>
              <Link href="https://topnote.vercel.app/">TopNote</Link>
            </p>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
