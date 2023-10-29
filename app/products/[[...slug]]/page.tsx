import React from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const Slug = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      Products / {slug} {sortOrder}
    </div>
  );
};

export default Slug;
