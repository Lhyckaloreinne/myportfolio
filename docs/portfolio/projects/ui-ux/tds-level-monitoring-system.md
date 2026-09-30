**# TDS Level Monitoring System Metadata**

\> This document contains the factual information for the TDS Level Monitoring System project.

\>

\> It serves as the primary source of truth for AI-assisted portfolio generation.

\>

\> The UI/UX Case Study Template defines the presentation structure, while this document provides the project-specific content.

**---**

**# Project Information**

\| Item | Value |

\|------|------|

\| Project Title | TDS Level Monitoring System |

\| Category | Web Development |

\| Project Type | IoT-Based Web Monitoring System |

\| Status | Completed / Capstone Project |

\| Year | [2026] |

\| Duration | [Add Duration] |

\| Client | Hagonoy Water District |

\| Platform | Responsive Web |

\| Role | Hardware Developer / Hardware Lead |

\| Team | [Add Team Size] |

\| Tools | ESP32-WROOM-32, DFRobot TDS Sensor, DS18B20, Air780E, Firebase, React |

**---**

**# Project Summary**

The TDS Level Monitoring System is an IoT-based web monitoring system developed as a capstone project for Hagonoy Water District.

The system is designed to monitor Total Dissolved Solids (TDS) levels across 24 pumping stations and provide centralized access to monitoring information through a web-based dashboard.

The hardware system uses an ESP32-WROOM-32 as the main microcontroller, with a DFRobot TDS Sensor for TDS measurement and a DS18B20 temperature sensor for temperature readings. An Air780E communication module is used to transmit collected sensor data.

The collected data is stored and retrieved through Firebase and presented through a React-based web dashboard.

The system serves as a monitoring aid and does not replace laboratory-based water quality testing.

**---**

**# Business Context**

Hagonoy Water District operates multiple pumping stations that require monitoring of water-related conditions.

The project covers 24 pumping stations and provides a centralized digital monitoring approach for accessing information from different locations.

The TDS Level Monitoring System connects field-level sensing hardware with a centralized web monitoring platform, allowing authorized users to review monitoring information and identify readings that require attention.

**---**

**# Problem Statement**

Monitoring TDS levels across multiple pumping stations can require collecting and reviewing information from different locations.

The project addresses the need for a centralized monitoring system where users can:

\- Monitor TDS readings

\- Access information from multiple pumping stations

\- Receive transmitted sensor data

\- Identify readings that reach the defined threshold

\- Review monitoring information

\- Access centralized monitoring records

**---**

**# Project Goals**

**## Business Goals**

\- Establish a centralized TDS monitoring system.

\- Support monitoring across 24 pumping stations.

\- Collect TDS readings through connected hardware.

\- Transmit sensor readings from pumping stations.

\- Store monitoring data digitally.

\- Provide centralized access to monitoring information.

\- Support threshold-based monitoring alerts.

**## User Experience Goals**

\- Make TDS readings easy to understand.

\- Make pumping station information easy to access.

\- Allow users to quickly review monitoring information.

\- Clearly communicate readings that require attention.

\- Organize monitoring information for easier review.

\- Provide appropriate access based on user roles.

**---**

**# Target Users**

**## Primary Users**

\- Pump Operators

\- Senior / Administrative Users

**## User Needs**

Users need to:

\- Monitor TDS readings

\- Review pumping station information

\- Identify stations that require attention

\- Review threshold alerts

\- Access monitoring records

\- Monitor multiple pumping stations through a centralized system

**---**

**# My Responsibilities**

As the Hardware Developer / Hardware Lead, I was responsible for the hardware side of the system:

\- Working with the ESP32-WROOM-32 integration.

\- Integrating the DFRobot TDS Sensor.

\- Integrating the DS18B20 temperature sensor.

\- Integrating the Air780E communication module.

\- Working on hardware wiring and connections.

\- Supporting sensor data collection.

\- Supporting the transmission of collected sensor data.

\- Testing hardware connections and sensor integration.

\- Supporting the hardware-to-system integration.

My responsibilities focused primarily on the hardware components and their integration. The React web dashboard and Firebase implementation were not solely my responsibility.

**---**

**# Design Considerations**

Formal UX research was not conducted for this project.

Instead, design decisions were guided by:

\- System requirements

\- Monitoring requirements

\- Hardware and sensor integration

\- Multiple pumping station monitoring

\- TDS monitoring workflow

\- Threshold-based monitoring

\- Centralized access to monitoring information

\- Roles and responsibilities of system users

**---**

**# Visual Direction**

The interface was designed around the needs of a monitoring system where information should be clear, organized, and easy to review.

Design characteristics include:

\- Clean dashboard-oriented layouts

\- Clear presentation of monitoring data

\- Readable TDS values

\- Status and alert indicators

\- Organized information hierarchy

\- Clear navigation

\- Structured data presentation

\- Minimal interface distractions

**---**

**# Information Architecture**

**## Sitemap**

\`\`\`text

TDS Level Monitoring System

│

├── Login

├── Dashboard

├── Pumping Stations

├── Monitoring

├── Forecasting

├── Alerts

├── Notifications

├── Reports

├── Profile

└── User Management

\`\`\`

**---**

**## Primary User Flow**

\`\`\`text

Pumping Station

      ↓

TDS Sensor

      ↓

ESP32-WROOM-32

      ↓

Sensor Data Collection

      ↓

Air780E

      ↓

Data Transmission

      ↓

Firebase

      ↓

Web Dashboard

      ↓

View Monitoring Data

      ↓

TDS Threshold Check

      ↓

Alert / Notification

\`\`\`

**---**

**# Key Design Decisions**

**## Centralized Monitoring**

Reason:

Provide users with a centralized platform for accessing monitoring information from multiple pumping stations.

**---**

**## Clear TDS Monitoring**

Reason:

Make TDS readings easy to identify and review as one of the primary monitoring values.

**---**

**## Threshold-Based Alerts**

Reason:

Use the defined 600 ppm TDS threshold to identify readings that require attention within the monitoring system.

**---**

**## Role-Based Access**

Reason:

Provide different system access and functions according to the user's role and responsibilities.

**---**

**## Hardware-to-Web Integration**

Reason:

Connect field-level sensors and communication hardware with the centralized web monitoring platform.

The system workflow connects the hardware and web components through:

**TDS Sensor → ESP32-WROOM-32 → Air780E → Firebase → React Web Dashboard**

**---**

**# Experience Walkthrough**

**## System Access**

**### Login**

**\*\*Image\*\***

\`Login.png\`

Purpose

Provides the login interface used to access the TDS Level Monitoring System.

**---**

**## Monitoring**

**### Dashboard**

**\*\*Image\*\***

\`Dashboard.png\`

Purpose

Provides an overview of monitoring information and system status, allowing users to quickly review important information.

**---**

**### Dashboard 2**

**\*\*Image\*\***

\`dashboard 2.png\`

Purpose

Provides an additional dashboard view for reviewing monitoring information and system conditions.

**---**

**### Alerts**

**\*\*Image\*\***

\`alerts.png\`

Purpose

Displays monitoring alerts for conditions that require user attention.

**---**

**### Notifications**

**\*\*Image\*\***

\`notifications.png\`

Purpose

Provides users with notifications related to system monitoring activities and alert conditions.

**---**

**## Data Monitoring**

**### Forecasting**

**\*\*Image\*\***

\`forecasting.png\`

Purpose

Provides access to the forecasting functionality within the monitoring system.

**---**

**### Reports**

**\*\*Image\*\***

\`reports.png\`

Purpose

Provides access to monitoring reports and organized system information for review.

**---**

**## Administration & Account**

**### User Management**

**\*\*Image\*\***

\`user management.png\`

Purpose

Allows authorized users to manage system users and related administrative functions.

**---**

**### Profile**

**\*\*Image\*\***

\`profile.png\`

Purpose

Provides users with access to their profile and account information.

**---**

**# Outcome**

The project established an IoT-based monitoring system that connects field-level sensing hardware with a centralized web platform for monitoring TDS levels across 24 pumping stations of Hagonoy Water District.

The system provides a centralized environment for monitoring information, alerts, notifications, reports, forecasting, and user management.

The hardware implementation connects the DFRobot TDS Sensor and DS18B20 temperature sensor to the ESP32-WROOM-32, with the Air780E used for communication and data transmission.

The system serves as a monitoring aid and does not replace laboratory-based water quality testing.

**---**

**# Reflection**

This project strengthened my understanding of hardware integration within an IoT-based monitoring system.

As the Hardware Developer / Hardware Lead, I gained hands-on experience working with sensors, the ESP32-WROOM-32, communication modules, wiring, and hardware testing.

It also helped me understand how field-level hardware connects to a larger digital monitoring workflow, where collected sensor data can be transmitted and presented through a centralized web platform.

If I were to continue developing the project, I would explore further hardware deployment and testing, improved sensor reliability, communication reliability, and additional monitoring capabilities.

**---**

**# Assets**

**## Image Directory**

/public/projects/Development/TDS Level Monitoring System/

**### Experience Walkthrough**

\- Login.png

\- Dashboard.png

\- dashboard 2.png

\- alerts.png

\- notifications.png

\- forecasting.png

\- reports.png

\- user management.png

\- profile.png

**---**

**# External Links**

Figma: [Add Link]

GitHub: [Add Link]

Live Website: [Add Link]

Prototype: [Add Link]

**---**

**# AI Notes**

**## Important Rules**

\- Never invent project facts.

\- Never invent user research.

\- Never invent business metrics.

\- Never exaggerate my role.

\- Keep all descriptions factual and concise.

\- Identify the project as a **Capstone Project**.

\- The client/organization is **Hagonoy Water District**.

\- The system covers **24 pumping stations**.

\- My role was **Hardware Developer / Hardware Lead**.

\- My contribution focused on the hardware side of the system.

\- Do not claim that I solely developed the React web dashboard.

\- Do not claim that I solely implemented Firebase.

\- Do not attribute the entire software system to me.

\- Hardware components include the **ESP32-WROOM-32**, **DFRobot TDS Sensor**, **DS18B20**, and **Air780E**.

\- The DFRobot TDS Sensor is connected to ESP32 GPIO 34.

\- The DS18B20 temperature sensor is connected to GPIO 4.

\- The Air780E communication module uses UART2, with RX on GPIO 16 and TX on GPIO 17.

\- Firebase is used for centralized data storage and retrieval.

\- React is used for the web dashboard.

\- The defined TDS threshold is **600 ppm**.

\- The system is a monitoring aid and should not be described as a replacement for laboratory water quality testing.

\- Do not invent team size, project duration, metrics, research findings, or other project details that are not provided.

\- Use the exact image filenames provided in the Assets section.

\- Preserve filename capitalization exactly.

\- Preserve spaces in filenames such as `dashboard 2.png` and `user management.png`.

\- The image directory is `/public/projects/Development/TDS Level Monitoring System/`.

\- Do not invent a cover image because no dedicated cover image was provided.

\- Use the UI/UX Case Study Template as the presentation structure.