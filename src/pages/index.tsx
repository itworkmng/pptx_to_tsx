import { slidesHref } from "@/utils/data";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-3xl font-bold">Upwork remote work</div>
      <div className="text-xl font-bold text-red-500">PPTX to .TSX</div>
      <ul>
         {slidesHref.map((slide) => (
          <li key={slide.id}>
            <a
              href={`/slides/${slide.id}`}
              className="hover:underline font-medium hover:font-bold text-xl"
            >
              {slide.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
