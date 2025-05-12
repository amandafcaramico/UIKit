"use client";
import { TopicTitle, ElementTitle, CustomIcon } from "@/components/index";
import { Button, IconButton } from "@/components/buttons/index";
import { Visibility } from "@mui/icons-material";

export default function ButtonsPage() {
  return (
    <>
      <TopicTitle number="2" title="Buttons" />
      <div className="grid grid-cols-5 gap-24 mt-6">
        <div className="space-y-16">
          <section className="h-6"></section>
          <section className="h-12">
            <ElementTitle title={"Default"} className="mb-0" />
          </section>
          <section className="h-12">
            <ElementTitle title={"Hover"} className="mb-0" />
          </section>
          <section className="h-12">
            <ElementTitle title={"Disabled"} className="mb-0" />
          </section>
          <section className="h-12">
            <ElementTitle title={"Rounded Variants"} className="mb-0" />
          </section>
        </div>
        <div className="space-y-16">
          <section>
            <ElementTitle title={"Normal"} className="mb-0" />
          </section>
          <section>
            <Button title={"Button Sample"} onClick={function (): void {}} />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              className="scale-[1.005] bg-right -translate-y-1 shadow-lg bg-[length:100%_100%]"
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              disabled={true}
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              lessRounded={true}
              title={"Button Sample"}
              onClick={function (): void {}}
            />
          </section>
        </div>
        <div className="space-y-[61.2px]">
          <section>
            <ElementTitle title={"Outline"} className="mb-0" />
          </section>
          <section>
            <Button
              outline={true}
              title={"Button Sample"}
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              outline={true}
              className="scale-[1.005] -translate-y-1 shadow-lg !text-white !bg-primary"
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              outline={true}
              title={"Button Sample"}
              disabled={true}
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              outline={true}
              lessRounded={true}
              title={"Button Sample"}
              onClick={function (): void {}}
            />
          </section>
        </div>
        <div className="space-y-16">
          <section>
            <ElementTitle title={"Icon + Text"} className="mb-0" />
          </section>
          <section>
            <Button
              icon={<Visibility sx={{ fill: "white" }} />}
              title={"Button Sample"}
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              icon={<Visibility sx={{ fill: "white" }} />}
              className="scale-[1.005] bg-right -translate-y-1 shadow-lg bg-[length:100%_100%]"
              iconPosition="left"
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              icon={<Visibility sx={{ fill: "white" }} />}
              disabled={true}
              iconPosition="left"
              onClick={function (): void {}}
            />
          </section>
          <section>
            <Button
              title={"Button Sample"}
              icon={<Visibility sx={{ fill: "white" }} />}
              lessRounded={true}
              onClick={function (): void {}}
            />
          </section>
        </div>
        <div className="space-y-16">
          <section>
            <ElementTitle title={"Icon"} className="mb-0" />
          </section>
          <section>
            <IconButton
              title="Adicionar"
              icon={<Visibility sx={{ fill: "white" }} />}
              onClick={function (): void {}}
            />
          </section>
          <section>
            <IconButton
              title="Adicionar"
              icon={<Visibility sx={{ fill: "white" }} />}
              onClick={function (): void {}}
              className="shadow-lg scale-110"
            />
          </section>
          <section>
            <IconButton
              title="Adicionar"
              icon={<Visibility sx={{ fill: "white" }} />}
              onClick={function (): void {}}
              disabled={true}
            />
          </section>
          <section>
            <IconButton
              title="Adicionar"
              icon={<Visibility sx={{ fill: "white" }} />}
              onClick={function (): void {}}
              lessRounded={true}
            />
          </section>
          <CustomIcon />
        </div>
      </div>
    </>
  );
}
