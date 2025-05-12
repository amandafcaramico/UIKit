"use client";
import { useState } from "react";
import { MenuItem } from "@mui/material";

import { TopicTitle, ElementTitle } from "@/components/index";

import {
  Checkbox,
  LargeSelector,
  Breadcrumb,
  Dropdown,
  Toggle,
  TabSelector,
  RadioButton,
  Pagination,
} from "@/components/Selectors/index";

export default function SelectorsPage() {
  const [checked, setChecked] = useState(true);
  const [toggled, setToggled] = useState(true);
  const [radioChecked, setRadioChecked] = useState<string | null>("option1");
  const [tabValue, setTabValue] = useState<string>("1");
  const [page, setPage] = useState(1);

  const [type, setType] = useState("");
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings" },
  ];

  return (
    <>
      <TopicTitle number="3" title="Selectors" />
      <div className="grid grid-cols-5 gap-12 mt-6">
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Checkbox"} className="mb-0" />
          </section>
          <section>
            <div className="flex h-8">
              <Checkbox checked={checked} label="Label" onChange={setChecked} />
            </div>
          </section>
          <section>
            <Checkbox checked={!checked} onChange={setChecked} />
          </section>
          <section>
            <Checkbox checked={false} disabled={true} onChange={setChecked} />
          </section>
          <section className="flex flex-col gap-4">
            <span className="text-xs">Smaller</span>
            <Checkbox checked={checked} onChange={setChecked} smaller />
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Radio Button"} className="mb-0" />
          </section>
          <section>
            <div className="flex h-8">
              <RadioButton
                checked={radioChecked === "option1"}
                onChange={() => setRadioChecked("option1")}
                label="Option 1"
                name="group1"
              />
            </div>
          </section>
          <section>
            <RadioButton
              checked={radioChecked === "option2"}
              onChange={() => setRadioChecked("option2")}
              label="Option 2"
              name="group2"
            />
          </section>
          <section>
            <RadioButton
              checked={false}
              disabled={true}
              onChange={() => setRadioChecked("option3")}
              label="Option 3"
              name="group4"
            />
          </section>
          <section className="flex flex-col gap-4">
            <span className="text-xs">Smaller</span>
            <RadioButton
              checked={radioChecked === "option4"}
              onChange={() => setRadioChecked("option4")}
              label="Option 4"
              name="group4"
              smaller
            />
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Toggle"} className="mb-0" />
          </section>
          <section>
            <Toggle
              checked={toggled}
              onChange={setToggled}
              name="toggleOn"
              id={"toggle-on"}
            />
          </section>
          <section>
            <Toggle
              checked={!toggled}
              onChange={setToggled}
              name="toggleOff"
              id={"toggle-off"}
            />
          </section>
          <section>
            <Toggle
              checked={toggled}
              onChange={setToggled}
              name="toggleOnSm"
              id={"toggle-on-sm"}
              smaller
            />
          </section>
          <section>
            <Toggle
              checked={!toggled}
              onChange={setToggled}
              name="toggleOffSm"
              id={"toggle-off-sm"}
              smaller
            />
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Tabs"} className="mb-0" />
          </section>
          <section>
            <TabSelector
              value={tabValue}
              onChange={(newValue) => {
                setTabValue(newValue);
              }}
              options={[
                { label: "Section 1", value: "1" },
                { label: "Section 2", value: "2" },
                { label: "Section 3", value: "3" },
              ]}
            />
          </section>
          <section>
            <ElementTitle title={"Pagination"} className="mb-0" />
          </section>
          <section>
            <Pagination
              currentPage={page}
              totalPages={5}
              onPageChange={(newPage) => setPage(newPage)}
            />
          </section>
          <section>
            <Pagination
              currentPage={page}
              totalPages={5}
              onPageChange={(newPage) => setPage(newPage)}
              lessRounded
            />
          </section>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-12 mt-12">
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Dropdown"} className="mb-0" />
          </section>
          <section>
            <div className="flex h-14">
              <Dropdown
                id="type_less"
                label="Tipo"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Selecione o tipo"
                width="14rem"
                lessRounded
              >
                <MenuItem value="option_1">Option 1</MenuItem>
                <MenuItem value="option_2">Option 2</MenuItem>
              </Dropdown>
            </div>
          </section>
          <section>
            <div className="flex h-14">
              <Dropdown
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Selecione o tipo"
                width="14rem"
              >
                <MenuItem value="option_1">Option 1</MenuItem>
                <MenuItem value="option_2">Option 2</MenuItem>
              </Dropdown>
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Breadcrumbs"} className="mb-0" />
          </section>
          <section>
            <div className="flex h-14">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <ElementTitle title={"Large Selectors"} className="mb-0" />
          </section>
          <section>
            <div className="flex flex-col space-y-4">
              <LargeSelector
                title="Premium Plan"
                description="Access all features"
                selected={true}
                lessRounded
                onClick={() => alert("Selected Premium")}
              />
              <LargeSelector
                title="Basic Plan"
                description="Just the essentials"
                onClick={() => alert("Selected Basic")}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
