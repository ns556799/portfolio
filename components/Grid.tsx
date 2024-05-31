import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              title,
              titleClassName,
              description,
              className,
              img,
              imgClassName,
              spareImg,
              id,
            },
            i
          ) => {
            return (
              <BentoGridItem
                key={i}
                title={title}
                id={id}
                description={description}
                className={className}
                img={img}
                spareImg={spareImg}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
              />
            );
          }
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
