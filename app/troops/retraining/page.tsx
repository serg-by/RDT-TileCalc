"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";



export default function Retraining() {
  const [isSpendMgmtEnabled, setIsSpendMgmtEnabled] = React.useState(true);

  return (
    <>
      <div className="rounded-lg bg-gray-50 p-6 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:ring-gray-800 mb-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Параметры переобучения
        </h4>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Укажите время и ресурсы на обучение 1000 войск выбранного типа,
          введите имеющиеся ускорения — расчёт покажет, сколько войск можно
          обучить и сколько ресурсов и ускорений будет потрачено.{" "}
        </p>
      </div>

      <div className=" mt-6  space-y-10">
        <section aria-labelledby="training-information">
          <div className="mt-6  space-y-10">
            <div className="sm:mx-auto sm:max-w-7xl">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="mt-6 lg:col-span-7">
                  <FieldGroup className="gap-6">
                    <FieldSet>
                      <FieldLegend>Калькулятор обучения войск</FieldLegend>
                      <FieldDescription>
                        Простой способо узнать что-то там...
                      </FieldDescription>
                    </FieldSet>

                    <FieldSet id="trainingTime" className="gap-2">
                      <FieldLegend
                        variant="label"
                        id="trainingTime_legend"
                        className="text-blue-950"
                      >
                        Время, необходимое для обучения 1000 войск:
                      </FieldLegend>

                      <FieldGroup
                        id="trainingTime_group"
                        className="grid grid-cols-3 gap-4"
                      >
                        <Field id="trainingTime_item_hour">
                          <FieldLabel htmlFor="trainingTime_input_hour">
                            Час / Hour
                          </FieldLabel>
                          <Input
                            type="number"
                            id="trainingTime_input_hour"
                            placeholder="3"
                            required
                          />
                        </Field>
                        <Field id="trainingTime_item_min">
                          <FieldLabel htmlFor="trainingTime_input_min">
                            Минуты / Minutes
                          </FieldLabel>
                          <Input
                            type="number"
                            id="trainingTime_input_min"
                            placeholder="12"
                            required
                          />
                        </Field>
                        <Field id="trainingTime_item_sec">
                          <FieldLabel htmlFor="trainingTime_input_sec">
                            Секунды / Seconds
                          </FieldLabel>
                          <Input
                            type="number"
                            id="trainingTime_input_sec"
                            placeholder="34"
                            required
                          />
                        </Field>
                      </FieldGroup>
                      <FieldDescription>
                        Укажите количество необходимого времени для обчучения.
                      </FieldDescription>
                    </FieldSet>
                    <FieldSeparator />

                    <FieldSet id="boost" className="gap-2">
                      <FieldLegend
                        id="boost_legend"
                        variant="label"
                        className="text-blue-950"
                      >
                        Количество ускорений в наличии:
                      </FieldLegend>

                      <FieldGroup
                        id="boost_group"
                        className="grid grid-cols-3 gap-4"
                      >
                        <Field id="boost_item_hour" className="gap-2">
                          <FieldLabel htmlFor="boost_input_hour">
                            Час / Hour
                          </FieldLabel>
                          <Input
                            type="number"
                            id="boost_input_hour"
                            placeholder="3"
                            required
                          />
                        </Field>
                        <Field id="boost_item_min" className="gap-2">
                          <FieldLabel htmlFor="boost_input_min">
                            Минуты / Minutes
                          </FieldLabel>
                          <Input
                            type="number"
                            id="boost_input_min"
                            placeholder="12"
                            required
                          />
                        </Field>
                        <Field id="boost_item_sec" className="gap-2">
                          <FieldLabel htmlFor="boost_input_sec">
                            Секунды / Seconds
                          </FieldLabel>
                          <Input
                            type="number"
                            id="boost_input_sec"
                            placeholder="34"
                            required
                          />
                        </Field>
                      </FieldGroup>
                      <FieldDescription>
                        Укажите количество имеющихся ускарений, рюкзак -
                        ускорения - выберите часы
                      </FieldDescription>
                    </FieldSet>
                    <FieldSeparator className="" />
                    <FieldSet>
                      <FieldLegend variant="label">Выбор события:</FieldLegend>
                      <FieldDescription>
                        Расчёт очков обучения войск по выброннаму событию.
                      </FieldDescription>
                      <RadioGroup defaultValue="TurboTurtle" className="flex">
                        <FieldLabel htmlFor="TurboTurtle">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>Турбочерепашка</FieldTitle>
                            </FieldContent>
                            <RadioGroupItem
                              value="TurboTurtle"
                              id="TurboTurtle"
                            />
                          </Field>
                        </FieldLabel>
                        <FieldLabel htmlFor="vm-AllianceVS">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>Дуэль союзов</FieldTitle>
                            </FieldContent>
                            <RadioGroupItem
                              value="AllianceVS"
                              id="vm-AllianceVS"
                            />
                          </Field>
                        </FieldLabel>
                      </RadioGroup>
                    </FieldSet>
                   {/*  <Field>
                      <FieldLabel htmlFor="form-country">Country</FieldLabel>
                      <Select defaultValue="us">
                        <SelectTrigger id="form-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field> */}
                  </FieldGroup>

                  {/* <RadioGroup defaultValue="plus" className="grid grid-cols-5 gap-4">
                    <FieldLabel htmlFor="troops10">
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldTitle>T10</FieldTitle>
                          <FieldDescription>
                            1 x 60
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem value="troops10" id="troops10" />
                      </Field>
                    </FieldLabel>
                    
                  </RadioGroup> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Separator />
       {/*  <section aria-labelledby="cost-spend-control">
          <form>
            <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
              <div>
                <h2
                  id="cost-spend-control"
                  className="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                >
                  Cost spend control
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Set hard caps for on-demand charges.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center justify-between">
                  <Switch
                    id="spend-mgmt"
                    name="spend-mgmt"
                    checked={isSpendMgmtEnabled}
                    onCheckedChange={() => {
                      setIsSpendMgmtEnabled(!isSpendMgmtEnabled);
                    }}
                  />
                </div>
                <div
                  className={cn(
                    "transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
                    isSpendMgmtEnabled ? "h-52 md:h-32" : "h-0",
                  )}
                  style={{
                    transitionDuration: "300ms",
                    animationFillMode: "backwards",
                  }}
                >
                  <div
                    className={cn(
                      "animate-slideDownAndFade transition",
                      isSpendMgmtEnabled ? "" : "hidden",
                    )}
                    style={{
                      animationDelay: "100ms",
                      animationDuration: "300ms",
                      transitionDuration: "300ms",
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <Label className="font-medium">Set amount ($)</Label>
                        <Input
                          id="hard-cap"
                          name="hard-cap"
                          defaultValue={350}
                          type="number"
                          className="mt-2"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label className="font-medium">
                          Provide email for notifications
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="admin@company.com"
                          type="email"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button type="submit">Update</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section> */}
        <Separator />
      </div>
    </>
  );
}
