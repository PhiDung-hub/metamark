import { NextPage } from "next";
import ContributorsCard from "../../components/ContributorsCard";
import data from "../../data.json";

const contributors = data.contributors;

const Contributors: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <p className="text-center font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum
        dolores praesentium ea cum exercitationem nobis itaque aliquam officia
        saepe? Natus ea ipsa quidem magnam corrupti voluptate temporibus
        similique expedita.
      </p>
      <div className="flex flex-col">
        {contributors.map((contributor) => (
          <ContributorsCard
            key={contributor.contribtorName}
            imageURL={contributor.imageURL}
            contribtorName={contributor.contribtorName}
            contribtorSubDesc={contributor.contribtorSubDesc}
            url={contributor.url}
            role={contributor.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Contributors;
