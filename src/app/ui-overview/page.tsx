"use client";
import Avatar from "@/components/avatar";
import Badge from "@/components/badge";
import { Button } from "@/components/button";
import RadioButtonGroup from "@/components/radioButtonGroup";
import Switch from "@/components/switch";
import { useState } from "react";

export default function Home() {
  const options = [
    { value: "test", label: "Test", alt: "Test" },
    { value: "test2", label: "Test 2", alt: "Test 2" },
    { value: "test3", label: "Test 3", alt: "Test 3" },
  ];
  const [selectedValue, setSelectedValue] = useState("test");
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <main className="bg-[#030711] p-10 flex flex-col gap-x-10 items-center">
      
      <RadioButtonGroup
          name={"test"}
          options={options}
          selectedValue={selectedValue}
          onChange={(value) => setSelectedValue(value)}
        />
        <div className="flex flex-col my-10 gap-y-2">
          <Switch
            isOn={isSwitchOn}
            handleToggle={toggleSwitch}
            variant="warning"
            size="small"
          />
          <Switch
            isOn={isSwitchOn}
            handleToggle={toggleSwitch}
            variant="default"
            size="default"
          />
          <Switch
            isOn={isSwitchOn}
            handleToggle={toggleSwitch}
            variant="success"
            size="large"
          />
        </div>
        <div className="my-5">
          <Badge
            content="10"
            size="default"
            position="top-left"
            variant="success"
          >
            <Button>Hello</Button>
          </Badge>
        </div>
        <div className="my-5">
          <Badge content="10" position="bottom-right" variant="error">
            <Avatar alt="Avatar" size="small" />
          </Badge>
        </div>
    </main>
  );
}
