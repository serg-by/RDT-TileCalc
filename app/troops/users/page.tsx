"use client";

import React from "react";

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

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// -------------------- Types --------------------

interface PointValues {
  turtle: string;
  vs: string;
}

interface Points {
  name: string;
  point: PointValues;
}

const points: Points[] = [
  { name: "t1", point: { turtle: "6", vs: "15" } },
  { name: "t2", point: { turtle: "11", vs: "27" } },
  { name: "t3", point: { turtle: "17", vs: "42" } },
  { name: "t4", point: { turtle: "22", vs: "55" } },
  { name: "t5", point: { turtle: "26", vs: "65" } },
  { name: "t6", point: { turtle: "33", vs: "82" } },
  { name: "t7", point: { turtle: "37", vs: "92" } },
  { name: "t8", point: { turtle: "44", vs: "110" } },
  { name: "t9", point: { turtle: "52", vs: "130" } },
  { name: "t10", point: { turtle: "60", vs: "150" } },
];

// -------------------- Component --------------------

const Retraining: React.FC = () => {
  const [trainingTime, setTrainingTime] = React.useState({ h: 0, m: 0, s: 0 });
  const [boost, setBoost] = React.useState({ h: 0, m: 0, s: 0 });

  const [troopTier, setTroopTier] = React.useState("t10");
  const [eventType, setEventType] = React.useState<
    "TurboTurtle" | "AllianceVS"
  >("TurboTurtle");

  const [result, setResult] = React.useState({
    units: 0,
    points: 0,
    spent: { h: 0, m: 0, s: 0 },
    left: { h: 0, m: 0, s: 0 },
  });

  const [isResourcesHideEnabled, setisResourcesHideEnabled] =
    React.useState<boolean>(true);

  // -------------------- Calculation --------------------

  function calculateResult() {
    const timeFor1000 =
      trainingTime.h * 3600 + trainingTime.m * 60 + trainingTime.s;

    if (timeFor1000 <= 0) {
      setResult({
        units: 0,
        points: 0,
        spent: { h: 0, m: 0, s: 0 },
        left: { h: 0, m: 0, s: 0 },
      });
      return;
    }

    const boostSeconds = boost.h * 3600 + boost.m * 60 + boost.s;

    // Сколько пачек по 1000 можно обучить
    const packs = Math.floor(boostSeconds / timeFor1000);

    // Количество войск (только кратно 1000)
    const units = packs * 1000;

    // Потраченные ускорения
    const spentSeconds = packs * timeFor1000;

    // Остаток ускорений
    const leftSeconds = boostSeconds - spentSeconds;

    // Очки
    const tier = points.find((p) => p.name === troopTier);
    if (!tier) return;

    const multiplier =
      eventType === "TurboTurtle"
        ? Number(tier.point.turtle)
        : Number(tier.point.vs);

    const totalPoints = units * multiplier;

    const spent = {
      h: Math.floor(spentSeconds / 3600),
      m: Math.floor((spentSeconds % 3600) / 60),
      s: Math.floor(spentSeconds % 60),
    };

    const left = {
      h: Math.floor(leftSeconds / 3600),
      m: Math.floor((leftSeconds % 3600) / 60),
      s: Math.floor(leftSeconds % 60),
    };

    setResult({ units, points: totalPoints, spent, left });
  }

  // -------------------- Auto Recalculate --------------------

  React.useEffect(() => {
    calculateResult();
  }, [trainingTime, boost, troopTier, eventType]);

  // -------------------- UI --------------------

  return (
    <>
      <div className="rounded-lg bg-gray-50 p-6 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:ring-gray-800 mb-6">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Параметры обучения
        </h4>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Укажите время и ускорения — расчёт покажет, сколько войск можно
          обучить и сколько очков вы получите.
        </p>
      </div>

      <div className="mt-6 space-y-10">
        <section aria-labelledby="training-information">
          <div className="mb-6 space-y-10">
            <div className="sm:mx-auto sm:max-w-7xl">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="mb-6 lg:col-span-7">
                  <FieldGroup className="gap-6">
                    {/* Время обучения */}
                    <FieldSet id="trainingTime" className="gap-2">
                      <FieldLegend variant="label" className="text-blue-950">
                        Время, необходимое для обучения 1000 войск:
                      </FieldLegend>

                      <FieldGroup className="grid grid-cols-3 gap-4">
                        <Field>
                          <FieldLabel>Часы</FieldLabel>
                          <Input
                            type="number"
                            value={trainingTime.h}
                            onChange={(e) =>
                              setTrainingTime({
                                ...trainingTime,
                                h: Number(e.target.value),
                              })
                            }
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Минуты</FieldLabel>
                          <Input
                            type="number"
                            value={trainingTime.m}
                            onChange={(e) =>
                              setTrainingTime({
                                ...trainingTime,
                                m: Number(e.target.value),
                              })
                            }
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Секунды</FieldLabel>
                          <Input
                            type="number"
                            value={trainingTime.s}
                            onChange={(e) =>
                              setTrainingTime({
                                ...trainingTime,
                                s: Number(e.target.value),
                              })
                            }
                          />
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSeparator />

                    {/* Ускорения */}
                    <FieldSet id="boost" className="gap-2">
                      <FieldLegend variant="label" className="text-blue-950">
                        Количество ускорений в наличии:
                      </FieldLegend>

                      <FieldGroup className="grid grid-cols-3 gap-4">
                        <Field>
                          <FieldLabel>Часы</FieldLabel>
                          <Input
                            type="number"
                            value={boost.h}
                            onChange={(e) =>
                              setBoost({ ...boost, h: Number(e.target.value) })
                            }
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Минуты</FieldLabel>
                          <Input
                            type="number"
                            value={boost.m}
                            onChange={(e) =>
                              setBoost({ ...boost, m: Number(e.target.value) })
                            }
                          />
                        </Field>

                        <Field>
                          <FieldLabel>Секунды</FieldLabel>
                          <Input
                            type="number"
                            value={boost.s}
                            onChange={(e) =>
                              setBoost({ ...boost, s: Number(e.target.value) })
                            }
                          />
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSeparator />

                    {/* Событие */}
                    <FieldSet>
                      <FieldLegend variant="label">Выбор события:</FieldLegend>

                      <RadioGroup
                        value={eventType}
                        onValueChange={(v) =>
                          setEventType(v as "TurboTurtle" | "AllianceVS")
                        }
                        className="flex gap-6"
                      >
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
                    <FieldSeparator />
                    {/* Тип войск */}
                    <FieldSet>
                      <FieldLegend variant="label" className="text-blue-950">
                        Выбор типа войск (уровня):
                      </FieldLegend>
                      <RadioGroup
                        value={troopTier}
                        onValueChange={setTroopTier}
                        className="grid grid-cols-5 gap-4 mb-6"
                      >
                        {points.map((p) => {
                          const valueToShow =
                            eventType === "TurboTurtle"
                              ? p.point.turtle
                              : p.point.vs;

                          return (
                            <FieldLabel key={p.name} htmlFor={p.name}>
                              <Field orientation="horizontal">
                                <FieldContent>
                                  <FieldTitle>
                                    {p.name.toUpperCase()}
                                  </FieldTitle>
                                  <FieldDescription>
                                    1 × {valueToShow}
                                  </FieldDescription>
                                </FieldContent>
                                <RadioGroupItem value={p.name} id={p.name} />
                              </Field>
                            </FieldLabel>
                          );
                        })}
                      </RadioGroup>
                    </FieldSet>
                    {/* Тип войск end*/}

                    {/* Resources*/}
                    
                    <FieldSet>
                      <div className="md:col-span-2">
                        <div className="flex items-center justify-between">
                          <FieldLegend
                            variant="label"
                            className="text-blue-950"
                          >
                            Ресурсы:
                          </FieldLegend>
                          <Switch
                            id="ResourcesHide"
                            name="ResourcesHide"
                            checked={isResourcesHideEnabled}
                            onCheckedChange={() => {
                              setisResourcesHideEnabled(
                                !isResourcesHideEnabled,
                              );
                            }}
                          />
                        </div>
                        <div
                          className={cn(
                            "transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
                            isResourcesHideEnabled ? "h-52 md:h-32" : "h-0",
                          )}
                          style={{
                            transitionDuration: "300ms",
                            animationFillMode: "backwards",
                          }}
                        >
                          <div
                            className={cn(
                              "animate-slideDownAndFade transition",
                              isResourcesHideEnabled ? "" : "hidden",
                            )}
                            style={{
                              animationDelay: "100ms",
                              animationDuration: "300ms",
                              transitionDuration: "300ms",
                              animationFillMode: "backwards",
                            }}
                          >
                            <FieldGroup
                              id="trainingResources_group"
                              className="grid grid-cols-2 gap-4"
                            >
                              <Field id="trainingResources_item_food">
                                <FieldLabel htmlFor="trainingResources_input_food">
                                  Еда / Food
                                </FieldLabel>
                                <Input
                                  type="number"
                                  id="trainingResources_input_food"
                                  placeholder="458 000"
                                  required
                                />
                              </Field>
                              <Field id="trainingResources_item_wood">
                                <FieldLabel htmlFor="trainingResources_input_wood">
                                  Дерево / Wood
                                </FieldLabel>
                                <Input
                                  type="number"
                                  id="trainingResources_input_wood"
                                  placeholder="458 000"
                                  required
                                />
                              </Field>
                              <Field id="trainingResources_item_metal">
                                <FieldLabel htmlFor="trainingResources_input_metal">
                                  Метал / Metal
                                </FieldLabel>
                                <Input
                                  type="number"
                                  id="trainingResources_input_metal"
                                  placeholder="34 000"
                                  required
                                />
                              </Field>
                              <Field id="trainingResources_item_fuel">
                                <FieldLabel htmlFor="trainingResources_input_fuel">
                                  Топливо / Fuel
                                </FieldLabel>
                                <Input
                                  type="number"
                                  id="trainingResources_input_fuel"
                                  placeholder="27 500"
                                  required
                                />
                              </Field>
                            </FieldGroup>{" "}
                          </div>
                        </div>
                      </div>
                    </FieldSet>
                    {/* Resources end*/}
                  </FieldGroup>
                </div>
                {/* Result */}
                <div className="lg:col-span-5">
                  <div className="mb-6 p-4 rounded-lg bg-gray-50 ring-1 ring-inset ring-gray-200 dark:bg-gray-400/10 dark:ring-gray-800">
                    <p>
                      Обучено войск: <b>{result.units}</b>
                    </p>
                    <p>
                      Очков получено: <b>{result.points}</b>
                    </p>
                    <p className="mb-2">Потрачено ускорений:</p>
                    <p>
                      <b>
                        {result.spent.h}ч {result.spent.m}м {result.spent.s}с
                      </b>
                    </p>
                    <p className="mb-2">Остаток ускорений:</p>
                    <p>
                      <b>
                        {result.left.h}ч {result.left.m}м {result.left.s}с
                      </b>
                    </p>
                    <p className="mt-2">
                      Выбранное событие:{" "}
                      <b>
                        {" "}
                        {eventType === "TurboTurtle"
                          ? "Турбочерепашка"
                          : "Дуэль союзов"}{" "}
                      </b>
                    </p>{" "}
                    <p className="mt-2">
                      Тип войск: <b>{troopTier.toUpperCase()}</b>
                    </p>
                  </div>
                  {/* Result End*/}
                  <Alert
                    variant="destructive"
                    className=" mb-6 border-rose-200 bg-rose-50"
                  >
                    {/* <AlertCircleIcon /> */}
                    <AlertTitle>Внимание</AlertTitle>
                    <AlertDescription>
                      Результаты являются приблизительными и могут отличаться от
                      фактических в игре из-за различных факторов, таких как
                      бонусы, события и изменения в механике игры.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />
      </div>
    </>
  );
};

export default Retraining;
