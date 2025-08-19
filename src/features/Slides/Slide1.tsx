import * as z from 'zod';

export const Schema = z.object({
    title: z.string()
        .min(5)
        .max(50)
        .default("New Demo")
        .meta({
            description: "New Demo title",
        }),
});

type SchemaType = z.infer<typeof Schema>;

export default function Slide1({ data }: { data: SchemaType }) {
    const { title } = data;
    return (
        <div className="aspect-video max-w-[1280px] w-full bg-white">
            <header className="slide-header">
                {title && <h1 className="text-4xl font-bold text-gray-900">{title}</h1>}
            </header>
        </div>
    );
}