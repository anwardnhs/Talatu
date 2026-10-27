"use client";

import { FiArrowUpRight } from "react-icons/fi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function CompanyWebsiteDialog({ name, domain, description }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="company-website-button">
          Visit company website
          <FiArrowUpRight size={20} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent className="company-website-dialog">
        <DialogTitle>{name}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <p className="company-domain">{domain}</p>
        <p className="company-website-status">Website link coming soon.</p>
      </DialogContent>
    </Dialog>
  );
}
