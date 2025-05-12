"use client";
import { useState } from "react";
import { Input, TextArea } from "@/components/textfields/index";
import { TopicTitle, ElementTitle } from "@/components/index";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function TextFieldsPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TopicTitle number="1" title="Textfields" />
      <div className="grid grid-cols-3 gap-14 mt-6">
        <div className="space-y-7">
          <section>
            <ElementTitle title={"Label, State & Placeholder"} />
            <Input
              id="input-label-state"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
              stateMessage={"State Message"}
            />
          </section>

          <section>
            <ElementTitle title={"No Label + No State"} />
            <Input
              id="input-no-label"
              type="text"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
            />
          </section>

          <section>
            <ElementTitle title={"Input + Label"} />
            <Input
              id="input-label"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
            />
          </section>

          <section>
            <ElementTitle title={"Input with Icon"} />
            <Input
              id="password-field"
              type={showPassword ? "text" : "password"}
              label="Label"
              placeholder="Password Example"
              icon={
                showPassword ? (
                  <VisibilityOff
                    className="cursor-pointer"
                    sx={{ fill: "#4F46E5" }}
                  />
                ) : (
                  <Visibility
                    className="cursor-pointer"
                    sx={{ fill: "#4F46E5" }}
                  />
                )
              }
              onClickIcon={() => setShowPassword(!showPassword)}
            />
          </section>
        </div>
        <div className="space-y-6">
          <section className="mb-4">
            <ElementTitle title={"Focus State"} />
            <Input
              id="input-label-focus"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
          </section>
          <section className="space-y-6">
            <ElementTitle title={"Validation States"} />
            <Input
              id="input-success"
              type="text"
              label="Label"
              stateMessage="Success!"
              placeholder="Placeholder"
              onChange={() => {}}
              state="success"
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
            <Input
              id="input-warning"
              type="text"
              label="Label"
              stateMessage="Warning!"
              placeholder="Placeholder"
              onChange={() => {}}
              state="warning"
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
            <Input
              id="input-error"
              type="text"
              label="Label"
              stateMessage="Error!"
              placeholder="Placeholder"
              onChange={() => {}}
              state="error"
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
          </section>
        </div>
        <div className="space-y-14">
          <section className="mb-4">
            <ElementTitle title={"Disabled"} />
            <Input
              id="input-disabled"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={true}
            />
          </section>
          <section className="mb-4">
            <ElementTitle title={"Rounded Variants"} />
            <Input
              id="less-rounded-input"
              type="text"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
              lessRounded={true}
              className=""
            />
          </section>
          <section className="mb-4">
            <ElementTitle title={"Text Area"} />
            <TextArea
              id="textearea"
              placeholder="Placeholder..."
              onChange={(e) => console.log(e.target.value)}
            />
          </section>
        </div>
      </div>
    </>
  );
}
