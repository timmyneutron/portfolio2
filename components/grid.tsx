import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { gridItems } from "@/data"

const Grid = () => {
  return (
    <section id="#about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(item => (<BentoGridItem key={item.id} {...item} />))}
      </BentoGrid>
    </section>
  )
}

export default Grid