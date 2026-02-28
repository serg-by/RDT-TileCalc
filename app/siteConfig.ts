export const siteConfig = {
  name: "RDT Dashboard",
  url: "",
  description: "The only dashboard you will ever need.",
  baseLinks: {
    home: "/",
    overview: "/overview",
    details: "/details",
    troops: {
      training: "/troops/training",
      retraining: "/troops/retraining",
      users: "/troops/users",
    },
  },
}

export type siteConfig = typeof siteConfig