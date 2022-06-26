import { PlanButton } from "src/component/atoms/Button/PlanButton";

type Props = {
  imageUrl: string;
  title: string;
  price: string;
  paymentLink: string;
};

export const Plan = (props: Props) => {
  const { imageUrl, paymentLink, price, title } = props;
  return (
    <div className="mx-auto max-w-sm h-56 bg-white rounded-lg shadow-sm">
      <div className="flex justify-center pt-4">
        <img
          src={imageUrl}
          className="object-cover my-auto w-28 h-28"
          alt="ramen"
        />
        <div className="mt-4 ml-4">
          <p className="text-3xl font-semibold">{title}</p>
          <p className="pt-1 ml-2 text-2xl font-semibold">{price}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-xl">
        <PlanButton text={`${title}をおごる`} paymentLink={paymentLink} />
      </div>
      <div className="flex justify-center mt-4 text-sm text-slate-400">
        他の用途にお金を使う場合もあります。
      </div>
    </div>
  );
};
