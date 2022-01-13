import StepItem from "../../molecules/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            imageSrc="step1"
            titleOne="1. Start"
            titleTwo="Pilih salah satu game"
            titleThree="yang ingin kamu top up"
          />
          <StepItem
            imageSrc="step2"
            titleOne="2. Fill Up"
            titleTwo="Top up sesuai dengan"
            titleThree="nominal yang sudah tersedia"
          />
          <StepItem
            imageSrc="step3"
            titleOne="3. Be a Winner"
            titleTwo="Siap digunakan untuk"
            titleThree="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
