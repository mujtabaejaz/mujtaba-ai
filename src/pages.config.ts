/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Engineering Case Studies',
    description: 'Deep-dive case studies from scaling Bykea to 10M+ users — covering automation architecture, quality transformation, squad leadership, and AI-augmented engineering.',
    heading: 'Projects & Case Studies',
    intro: 'Real engineering challenges, documented with full context: the problem, the constraints, the decisions made, and the measurable outcomes. Not screenshots — outcomes.',
  },
  
  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Decisions - Engineering & Leadership Choices',
    description: 'A transparent log of the architectural, process, and leadership decisions that shaped how Bykea engineers quality at scale — with full context, alternatives, and reasoning.',
    heading: 'Decisions',
    intro: 'The choices that shaped how we build at Bykea — documented with the context, alternatives considered, and reasoning behind each call. Because good decisions deserve a paper trail.',
  },
  
  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - From QA Engineer to Co-Head of Engineering',
    description: 'The career story behind 7+ years of engineering growth — from writing the first Appium scripts at Bykea to leading three cross-functional squads scaling Pakistan\'s largest ride-hailing platform.',
    heading: 'My Journey',
    intro: 'From Software QA Engineer to Co-Head of Engineering at one of Pakistan\'s fastest-growing startups — not a straight line, but every step was intentional. Here\'s the story.',
  },
  
  /**
   * Writing/blog listing page (/writing)
   */
  writing: {
    title: 'Writing - Engineering Leadership & Quality Insights',
    description: 'Lessons from building quality engineering cultures, leading agile squads, and integrating AI into engineering workflows — written from 7+ years in the trenches.',
    heading: 'Writing',
    intro: 'Lessons from building software quality culture at scale, leading high-performance squads, and integrating AI into real engineering workflows. Practical, opinionated, and grounded in real experience.',
  },

  /**
   * Speaking engagements page (/speaking)
   */
  speaking: {
    title: 'Speaking - Talks & Community Engagement',
    description: 'Talks, workshops, and community events on quality engineering, engineering leadership, and AI-augmented development practices.',
    heading: 'Speaking',
    intro: 'Community talks, internal presentations, and workshops on quality engineering, team leadership, and the future of AI-augmented software development.',
  },
  
  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Tools & Engineering Stack',
    description: 'The tools, technologies, and systems I use daily as an engineering leader — from test automation to AI-assisted development.',
    heading: 'Uses',
    intro: 'The tools and systems powering my work — from mobile automation frameworks to AI-assisted development workflows. Practical, opinionated choices with reasoning behind each.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Let\'s Talk',
    description: 'Reach out to discuss engineering leadership, quality strategy, AI-augmented development, or opportunities.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
