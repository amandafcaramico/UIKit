"use client";
import {
  Input,
  InputWithLabel,
  InputWithIcon,
  InputWithLabelandStatus,
} from "@/components/textfields";
import InputLessRounded from "@/components/textfields/InputLessRounded";
import Textarea from "@/components/textfields/TextArea";
import TopicTitle from "@/components/TopicTitle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function TextFieldsPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TopicTitle number="1" title="Textfields" />
      <div className="grid grid-cols-3 gap-14 mt-6">
        <div className="space-y-7">
          <section>
            <h2 className=" text-purple-text font-medium mb-4">
              Label, Status & Placeholder
            </h2>
            <InputWithLabelandStatus
              id="input-label-status"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
              status={"Status"}
            />
          </section>

          <section>
            <h2 className=" text-purple-text font-medium mb-4">
              No Label + No Status
            </h2>
            <Input
              id="input-no-label"
              type="text"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
            />
          </section>

          <section>
            <h2 className=" text-purple-text font-medium mb-4">
              Input + Label
            </h2>
            <InputWithLabel
              id="input-label"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
            />
          </section>

          <section>
            <h2 className=" text-purple-text font-medium mb-4">
              Input with Icon
            </h2>
            <InputWithIcon
              id="password-field"
              type={showPassword ? "text" : "password"}
              label="Label"
              placeholder="Password Example"
              icon={
                showPassword ? (
                  <VisibilityOff className="cursor-pointer" />
                ) : (
                  <Visibility className="cursor-pointer" />
                )
              }
              onIconClick={() => setShowPassword(!showPassword)}
            />
          </section>
        </div>
        <div className="space-y-6">
          <section className="mb-4">
            <h2 className=" text-purple-text font-medium mb-4">Focus State</h2>
            <InputWithLabel
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
            <h2 className=" text-purple-text font-medium mb-4">
              Validation States
            </h2>
            <InputWithLabelandStatus
              id="input-success"
              type="text"
              label="Label"
              status="Success!"
              placeholder="Placeholder"
              onChange={() => {}}
              state="success"
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
            <InputWithLabelandStatus
              id="input-warning"
              type="text"
              label="Label"
              status="Warning!"
              placeholder="Placeholder"
              onChange={() => {}}
              state="warning"
              disabled={false}
              className="outline-primary -translate-y-1 outline outline-[2px] outline-solid"
            />
            <InputWithLabelandStatus
              id="input-error"
              type="text"
              label="Label"
              status="Error!"
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
            <h2 className=" text-purple-text font-medium mb-4">Disabled</h2>
            <InputWithLabel
              id="input-disabled"
              type="text"
              label="Label"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={true}
            />
          </section>
          <section className="mb-4">
            <h2 className=" text-purple-text font-medium mb-4">
              Rounded Variants
            </h2>
            <InputLessRounded
              id="less-rounded-input"
              type="text"
              placeholder="Placeholder"
              onChange={() => {}}
              disabled={false}
              className=""
            />
          </section>
          <section className="mb-4">
            <h2 className=" text-purple-text font-medium mb-4">Text Area</h2>
            <Textarea
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
