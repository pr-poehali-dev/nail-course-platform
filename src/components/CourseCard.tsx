import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  image: string;
}

const CourseCard = ({
  title,
  description,
  price,
  duration,
  level,
  image,
}: CourseCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-6xl">{image}</span>
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold text-gray-800 font-montserrat">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {level}
          </Badge>
        </div>
        <CardDescription className="text-gray-600 font-open-sans">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-purple-600">{price}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Купить курс
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
