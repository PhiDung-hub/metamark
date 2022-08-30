import Image from "next/image";

interface ContributorsCardProps {
  imageURL: string;
  contribtorName: string;
  contribtorSubDesc: string;
  url: string;
  role: string;
}

export default function ContributorsCard(props: ContributorsCardProps) {
  return (
    <div className="grid gap-4 grid-flow-col w-full">
      <div
        className="rounded-full overflow-hidden"
        style={{
          height: "200px",
          width: "200px",
        }}
      >
        <Image
          src={props.imageURL}
          alt="Profile pic"
          width={200}
          height={200}
        />
      </div>
      <div>
        <p className="relative -translate-y-1/2 top-1/2 text-center font-bold">
          {props.contribtorName}
        </p>
      </div>
      <div>
        <p className="relative -translate-y-1/2 top-1/2 text-center">
          {props.contribtorSubDesc}
        </p>
      </div>
      <div>
        <button
          className="w-full relative -translate-y-1/2 top-1/2 "
          onClick={toPersonalSite(props.url)}
        >
          <div className="text-center text-blue-500">{props.url}</div>
        </button>
      </div>
      <div>
        <p className="relative -translate-y-1/2 top-1/2 text-center">
          {props.role}
        </p>
      </div>
    </div>
  );
}

const toPersonalSite = (link: string) => (event: any) => {
  document.location.href = "https://" + link;
};
