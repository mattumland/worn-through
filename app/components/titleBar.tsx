import React from "react";

type TitleProps = {
  title: string
}

export default function TitleBar({ title }: TitleProps): React.ReactElement {
  return (
    <h2 className="bg-white mb-5 py-10 text-black text-6xl text-center">{title}</h2>
  )
}