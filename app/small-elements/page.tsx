"use client";
import { TopicTitle, ElementTitle } from "@/components/index";

export default function SmallElementsPage() {
  return (
    <>
      <TopicTitle number="4" title="Small Elements" />
      <div className="grid grid-cols-5 gap-12 mt-6">
        <div className="space-y-8">
          <section>
            <ElementTitle title={"..."} className="mb-0" />
          </section>
        </div>
      </div>
    </>
  );
}
