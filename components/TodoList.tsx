"use client";

import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
  return (
    <div>
      {/* Calander */}
      Calander
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
           {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card> {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card> {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card> {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card> {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card> {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" className="cursor-pointer" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
