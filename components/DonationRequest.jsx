"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const formSchema = z.object({
  organizationName: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  comments: z.string().optional(),
  eventDate: z.date({
    required_error: "Please select a date for your event.",
  }),
  eventTime: z.string().min(1, {
    message: "Please select a time for your event.",
  }),
});

export default function DonationRequestSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      comments: "",
      eventTime: "",
    },
  });

  function onSubmit(values) {
    console.log(values);

    // Combine date and time for a complete datetime value
    if (values.eventDate && values.eventTime) {
      const [hours, minutes] = values.eventTime.split(":");
      const eventDateTime = new Date(values.eventDate);
      eventDateTime.setHours(parseInt(hours, 10));
      eventDateTime.setMinutes(parseInt(minutes, 10));

      console.log("Combined Date and Time:", eventDateTime);

      // You can add this to your values object if needed
      values.eventDateTime = eventDateTime;
    }

    // Show success toast notification
    toast.success("Donation request submitted successfully!", {
      description: `Thank you ${values.contactName} from ${values.organizationName}. We'll be in touch soon.`,
      duration: 5000,
      className: "group",
      descriptionClassName: "text-black font-medium text-sm",
      titleClassName: "text-black font-bold text-base",
      style: {
        backgroundColor: "#FFFFFF", // White background
        border: "1px solid #000000",
        color: "Black", // White text for title
      },
    });

    // Reset the form after successful submission
    form.reset();

    // TODO: Send the form data to your API
    // Example: fetch('/api/donation-requests', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values)
    // });
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Donation Request</h1>
        <div className="relative w-full my-4 sm:my-6 max-w-lg mx-auto">
          <Image
            src="/two-twin-boys-sitting-on-counter.jpg"
            alt="Donation Request"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            width={800}
            height={400}
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <div className="prose max-w-none mb-6 text-sm sm:text-base">
            <p className="mb-3 sm:mb-4">
              At Wilson&apos;s Bakery, our favorite part of the day is talking
              to, meeting, and making people smile! We want to meet and know
              you, and be here to help as best we can with churches, schools and
              other non-profit donation events. We have many calls on this each
              week, and so we have put together this page to allow you to get
              your request to the right person in a timely and efficient manner!
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
              Community Giving
            </h2>
            <p className="mb-3">
              We take our role as a member of the Middle Georgia community
              seriously! At the end of each day, we donate all unsold pastries
              to local charities and organizations to help those in our
              community. Throughout the year, we donate oodles of gift cards and
              platters to local charity events, auctions and raffles.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-4">
              Gift Cards & Baked Good Donation Guidelines
            </h2>
            <p className="mb-2">
              We do our best to honor all requests to qualified organizations
              that apply for a gift card or product donation. If you would like
              to apply, please make sure that you can answer &apos;yes&apos; to
              the following questions:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                My organization is a nonprofit, charitable organization pursuant
                to Section 501(c)(3) of the Internal Revenue Code.
              </li>
              <li>
                The goal of my organization or event is to enrich the health,
                educational or cultural well being of our community.
              </li>
              <li>
                My organization is non-partisan and my event is not a political
                fundraiser.
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-4">
              What We Give
            </h2>
            <p className="mb-3">
              We offer a variety of options to choose from. From fresh baked
              goods to Gift Cards. Please let us know which is more appropriate
              for your event.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-4">
              When We Give
            </h2>
            <p>
              We review donation requests as they are received. Your request
              must be submitted at least 60 days prior to the event in order to
              be reviewed. Please note that due to our active involvement in the
              community, including various government, school, and
              organizational commitments, our availability may be limited during
              peak seasons. More time may be needed to process your request,
              however we make every effort to respond in a timely manner. Please
              allow enough time for your request to be processed.
            </p>

            <div className="bg-yellow-50 p-3 sm:p-4 border border-yellow-200 rounded-md mt-4 sm:mt-6">
              <p className="font-medium text-sm sm:text-base">
                Donation requests made by phone or email will not be accepted.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Card className="shadow-md">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="text-lg sm:text-xl">
                Donation Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 sm:space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Name of organization *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter organization name"
                            {...field}
                            className="text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Point of Contact *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter contact name"
                            {...field}
                            className="text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter email address"
                            {...field}
                            className="text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="emailUpdates"
                      className="mr-2 h-4 w-4"
                    />
                    <label
                      htmlFor="emailUpdates"
                      className="text-xs sm:text-sm"
                    >
                      Check here to receive email updates
                    </label>
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Phone *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter phone number"
                            {...field}
                            className="text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Comments
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your comments here"
                            {...field}
                            className="text-sm sm:text-base min-h-24"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-sm sm:text-base">
                          Date of event *
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={`w-full pl-3 text-left font-normal text-sm sm:text-base ${
                                  !field.value && "text-muted-foreground"
                                }`}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Time of event *
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type="time"
                              placeholder="Select time"
                              {...field}
                              className="text-sm sm:text-base pl-10"
                            />
                          </FormControl>
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-indigo-800 hover:bg-indigo-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:text-lg"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
