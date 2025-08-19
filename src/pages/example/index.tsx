import ExampleSlideLayout from '@/features/ExampleSlideLayout'
import React from 'react'

const Page = () => {
  return ( <ExampleSlideLayout
      data={{
        title: "Test",
        subtitle: "Code Working",
        metrics: [
          {
            label: "Classic 1",
            value: "default layout for presentations",
            trend: "up",
          },
          {
            label: "Classic 2",
            value: "default layout for presentations",
            trend: "down",
          },
          {
            label: "Classic 3",
            value: "default layout for presentations",
            trend: "stable",
          },
        ],
        chartImage: {
          __image_url__:
            "https://scontent.fuln1-1.fna.fbcdn.net/v/t39.8562-6/458450903_3358223067814297_8901718512415750338_n.jpg?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=217208&_nc_ohc=nOtkQvyvyiYQ7kNvwGowO00&_nc_oc=AdnLTsktE1_XP6AyiiUjCiQ5UcDjAQ6E-P9blOT5eZK56EPGKSnDUUvUE5yevHGZAo5aZNo6n5kgyfNMQve_qz4b&_nc_zt=14&_nc_ht=scontent.fuln1-1.fna&_nc_gid=3OYfTxNFg1YVickwT_OWbQ&oh=00_AfW_Z1zjBzMFRMQ9pDpie0kU_JRTBzyAl5Gdp-hXX4-38Q&oe=68AA5374",
          __image_prompt__: "Sain uu",
        },
        trendIcon: {
          __icon_url__:
            "https://scontent.fuln1-1.fna.fbcdn.net/v/t39.8562-6/458450903_3358223067814297_8901718512415750338_n.jpg?stp=dst-webp&_nc_cat=109&ccb=1-7&_nc_sid=217208&_nc_ohc=nOtkQvyvyiYQ7kNvwGowO00&_nc_oc=AdnLTsktE1_XP6AyiiUjCiQ5UcDjAQ6E-P9blOT5eZK56EPGKSnDUUvUE5yevHGZAo5aZNo6n5kgyfNMQve_qz4b&_nc_zt=14&_nc_ht=scontent.fuln1-1.fna&_nc_gid=3OYfTxNFg1YVickwT_OWbQ&oh=00_AfW_Z1zjBzMFRMQ9pDpie0kU_JRTBzyAl5Gdp-hXX4-38Q&oe=68AA5374",
          __icon_query__: "",
        },
      }}
    />
  )
}

export default Page