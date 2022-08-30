import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-4 py-8 grid grid-cols-2 grid-rows-2 gap-4">
        <div className="row-start-1 col-start-1">
          <Image
            src="https://picsum.photos/200/300"
            alt="A pic"
            height={200}
            width={300}
          />
        </div>
        <div className="row-start-1 col-start-2">
          <span className="font-bold pr-4">Who are we?</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maxime modi blanditiis, commodi placeat aliquam quidem, inventore
            dolorum repellat molestias expedita, laborum distinctio eaque
            adipisci ipsam tempora tempore quae quasi!
          </span>
          <br />
          <span className="font-bold pr-4">What is this?</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            dignissimos maiores provident in soluta. A ad dolores rem
            reprehenderit nobis repudiandae id beatae at nulla? Aliquam corrupti
            odit nam inventore.
          </span>
        </div>
        <div className="row-start-2 col-start-1">
          <span className="font-bold pr-4">How do I join in? </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
            aliquid sint nesciunt fugiat animi culpa? Voluptatem impedit esse
            eius. Inventore ab commodi consequuntur delectus itaque debitis
            minima, deleniti fuga?
          </span>
        </div>
        <div className="row-start-2 col-start-2">
          <Image
            src="https://picsum.photos/200/300"
            alt="A pic"
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
