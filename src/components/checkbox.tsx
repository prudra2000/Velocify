import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

const CheckboxDemo = () => (
  <form>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox.Root
        className="peer outline outline-1 outline-black w-4 h-4 rounded-sm bg-white checked:bg-black"
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="bg-blue-700 flex items-center justify-center text-current">
          <Check className="h-4 w-4 stroke-white" />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  </form>
);

export default CheckboxDemo;
