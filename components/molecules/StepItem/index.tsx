interface StepProps {
  imageSrc: "step1" | "step2" | "step3";
  titleOne: string;
  titleTwo: string;
  titleThree: string;
}

export default function StepItem(props: StepProps) {
  const { imageSrc, titleOne, titleTwo, titleThree } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          className="mb-30"
          src={`/icon/${imageSrc}.svg`}
          width={80}
          height={80}
          alt=""
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{titleOne}</p>
        <p className="text-lg color-palette-1 mb-0">
          {titleTwo}
          <br />
          {titleThree}
        </p>
      </div>
    </div>
  );
}
