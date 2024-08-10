import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", origin: "Thailand" },
    { name: "Maine Coon", origin: "United States" },
    { name: "Persian", origin: "Iran" },
    { name: "British Shorthair", origin: "United Kingdom" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
            <CardDescription>What makes cats unique?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Independent nature</li>
              <li>Excellent hunters with sharp claws and teeth</li>
              <li>Flexible bodies and quick reflexes</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known cat breeds and their origins</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              {catBreeds.map((breed) => (
                <li key={breed.name} className="bg-white p-4 rounded-lg shadow">
                  <strong>{breed.name}</strong>: {breed.origin}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
