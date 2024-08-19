import {
  Testimonial,
  TestimonialHeader,
  TestimonialContent,
  TestimonialFooter,
} from "@/components/testimonial";

export default function Home() {
  const test = `"Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Testimonial>
        <TestimonialHeader
          name="Rudra Patel"
          secondaryInfo="Web Developer"
          rating={4.5}
          starColor="#95c604"
          avatarURL="/avatar-svgrepo-com.svg"
        ></TestimonialHeader>
        <TestimonialContent testimony={test} />
      </Testimonial>
    </main>
  );
}
