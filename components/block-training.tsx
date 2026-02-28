// 'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import {
  RiCheckboxCircleFill,
  RiCheckLine,
  RiExternalLinkLine,
} from '@remixicon/react';
import {
  Divider,
  List,
  ListItem,
  Select,
  SelectItem,
  TextInput,
} from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const highlights = [
  {
    id: 1,
    feature: 'Used by 50% of S&P 500 companies',
  },
  {
    id: 2,
    feature: 'Based on open-source tech',
  },
  {
    id: 3,
    feature: 'Largest developer community',
  },
];

const plans = [
  {
    name: 'Hobby',
    features: [
      { feature: '1,000 requests per day' },
      { feature: '3 environments' },
      { feature: 'Up to 10 user seats' },
      { feature: 'Community support' },
    ],
    price: '$40',
    href: '#',
    isRecommended: false,
  },
  {
    name: 'Premium',
    features: [
      { feature: '100,000 requests per day' },
      { feature: '10 environments' },
      { feature: 'Up to 50 user seats' },
      { feature: 'Premium Slack support' },
    ],
    price: '$80',
    href: '#',
    isRecommended: true,
  },
  {
    name: 'Enterprise',
    features: [
      { feature: 'Unlimited requests per day' },
      { feature: 'Unlimited environments and user seats' },
      { feature: 'SAML Single-Sign-On (SSO)' },
      { feature: '99.99% SLA' },
      { feature: 'Volume discount' },
    ],
    price: '$160',
    href: '#',
    isRecommended: false,
  },
];

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);
  return (
    <>
      <form className="sm:mx-auto sm:max-w-7xl">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Create new workspace
        </h3>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="mt-6 lg:col-span-7">
            <div className="space-y-4 md:space-y-6">
              <div className="md:flex md:items-center md:space-x-4">
                <div>
                  <label
                    htmlFor="organization"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Organization
                  </label>
                  <Select
                    id="organization"
                    name="organization"
                    className="mt-2"
                  >
                    <SelectItem value="1">Acme, Inc.</SelectItem>
                    <SelectItem value="2">Hero Labs</SelectItem>
                    <SelectItem value="3">Rose Holding</SelectItem>
                  </Select>
                </div>
                <div className="mt-4 md:mt-0 md:w-full">
                  <label
                    htmlFor="workspace"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Workspace name
                  </label>
                  <TextInput id="workspace" name="workspace" className="mt-2" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="region"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Region
                </label>
                <Select
                  id="region"
                  name="Region"
                  defaultValue="1"
                  className="mt-2"
                >
                  <SelectItem value="1">EU-West (Frankfurt)</SelectItem>
                  <SelectItem value="2">US-East (Boston)</SelectItem>
                  <SelectItem value="3">US-West (San Francisco)</SelectItem>
                </Select>
                <p className="mt-2 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                  For best performance, choose a region closest to your
                  operations
                </p>
              </div>
            </div>
            <h4 className="mt-14 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Plan type<span className="text-red-500">*</span>
            </h4>
            <RadioGroup
              name="Plan"
              value={selected}
              onChange={setSelected}
              className="mt-4"
            >
              <div className="space-y-4">
                {plans.map((plan) => (
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'border-tremor-brand-subtle ring-2 ring-tremor-brand-muted dark:border-dark-tremor-brand-subtle dark:ring-dark-tremor-brand-muted'
                          : 'border-tremor-border dark:border-dark-tremor-border',
                        'relative block cursor-pointer rounded-tremor-default border bg-tremor-background transition dark:bg-dark-tremor-background',
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-start space-x-4 px-6 py-4">
                          <div
                            className={classNames(
                              checked
                                ? 'border-transparent bg-tremor-brand dark:bg-dark-tremor-brand'
                                : 'border-gray-300 bg-tremor-background dark:border-dark-tremor-border dark:bg-dark-tremor-background',
                              'mt-1 flex size-4 shrink-0 items-center justify-center rounded-tremor-full border',
                            )}
                            aria-hidden={true}
                          >
                            <span className="size-1.5 rounded-tremor-full bg-tremor-background dark:bg-dark-tremor-background" />
                          </div>
                          <div className="w-full">
                            <p className="leading-6">
                              <span className="text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                {plan.name}
                              </span>
                              {plan.isRecommended ? (
                                <span className="ml-1.5 inline-flex items-center rounded-tremor-small bg-tremor-background-muted px-2 py-1 text-tremor-label font-medium text-tremor-content-strong ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-muted dark:text-dark-tremor-content-strong dark:ring-dark-tremor-ring">
                                  recommended
                                </span>
                              ) : null}
                            </p>
                            <List className="mt-2">
                              {plan.features.map((feature, index) => (
                                <ListItem
                                  key={index}
                                  className="justify-start gap-2"
                                >
                                  <RiCheckLine
                                    className="size-4 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
                                    aria-hidden={true}
                                  />
                                  {feature.feature}
                                </ListItem>
                              ))}
                            </List>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-b-tremor-default border-t border-tremor-border bg-tremor-background-muted px-6 py-3 dark:border-dark-tremor-border dark:bg-dark-tremor-background-muted">
                          <a
                            href={plan.href}
                            className="inline-flex items-center gap-1 text-tremor-default text-tremor-brand hover:underline hover:underline-offset-4 dark:text-dark-tremor-brand"
                          >
                            Learn more
                            <RiExternalLinkLine
                              className="size-4"
                              aria-hidden={true}
                            />
                          </a>
                          <div>
                            <span className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              {plan.price}
                            </span>
                            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                              /mo
                            </span>
                          </div>
                        </div>
                        <span
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked
                              ? 'border-tremor-brand dark:border-dark-tremor-brand'
                              : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-tremor-default',
                          )}
                          aria-hidden={true}
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-tremor-default bg-tremor-background-muted p-6 ring-1 ring-inset ring-tremor-ring dark:bg-dark-tremor-background-muted dark:ring-dark-tremor-ring">
              <h4 className="text-tremor-default font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Which plan best fits your needs?
              </h4>
              <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <List className="mt-4 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                {highlights.map((item) => (
                  <ListItem
                    key={item.id}
                    className="justify-start space-x-2 py-2.5"
                  >
                    <RiCheckboxCircleFill
                      className="size-5 text-tremor-brand dark:text-dark-tremor-brand"
                      aria-hidden={true}
                    />
                    <span className="truncate">{item.feature}</span>
                  </ListItem>
                ))}
              </List>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-tremor-default text-tremor-brand dark:text-dark-tremor-brand"
              >
                Learn more about our workspace plans
                <RiExternalLinkLine className="size-4" aria-hidden={true} />
              </a>
            </div>
          </div>
        </div>
        <Divider className="my-10" />
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}