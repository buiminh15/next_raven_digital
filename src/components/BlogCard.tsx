import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "src/constants";

function BlogCard() {
  return (
    <Link href={"/blogs"}>
      <div className="group relative aspect-[460/714] cursor-pointer overflow-hidden rounded-tr-[80px] bg-dark p-5 after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full after:bg-primary after:transition-all after:duration-500 after:ease-in after:content-[''] hover:after:h-3/4 hover:after:transition-all hover:after:delay-100 hover:after:duration-500 hover:after:ease-in">
        <div className="relative z-10 after:absolute after:bottom-0 after:z-20 after:rounded-tr-[40px] after:bg-light-blue after:px-8 after:py-4 after:font-medium after:content-['Techno'] ">
          <Image
            src={IMAGES.person2}
            alt=""
            className="block aspect-square w-full max-w-full overflow-hidden rounded-tr-[80px] object-cover"
          />
        </div>
        <div className="relative z-10 mt-5 w-full">
          <div className="flex items-center justify-between text-base font-medium text-slate-400">
            <span>07/06/2021</span>
            <span>1502</span>
          </div>
          <h5 className="truncate text-lg font-medium xl:whitespace-normal">
            Please Click Here.
          </h5>
          <p className="mt-5 text-slate-500 md:truncate xl:whitespace-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            et natus officiis earum dolore ad commodi a nesciunt vero!
            Accusantium quas nemo repellat adipisci pariatur similique
            laudantium non? Cumque, dolorem!
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
