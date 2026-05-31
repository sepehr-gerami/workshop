import { Plus, TrashBin } from "@gravity-ui/icons";
import { Button, ButtonGroup } from "@heroui/react";
import { useState } from "react";

export function WithIcons() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };


  const deleteCount = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0); // اطمینان از اینکه count منفی نشود
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-2 py-4 ">
        {/* <p className="text-sm text-muted">With icons</p> */}
        <ButtonGroup variant="secondary">
          <Button onClick={increase}>
            <Plus />
            Add {count}
          </Button>
          <Button onClick={deleteCount}>
            <ButtonGroup.Separator />
            <TrashBin />
            Delete
          </Button>
        </ButtonGroup>
      </div>

    </div>
  );
}