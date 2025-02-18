'use client'
import style from './Faq.module.scss';
import React, {FC, SyntheticEvent, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";

type ExpandedType = 'panel4' | 'panel3' | 'panel2' | 'panel1';

enum ExpandedEnum {
    panel4 = 'panel4',
    panel3 = 'panel3',
    panel2 = 'panel2',
    panel1 = 'panel1'
}

const faqData = [
    {
        expanded: ExpandedEnum.panel1,
        title: 'How to earn tokens?',
        topPosition: 0,
        desc: 'Initially, users earn LTR and opening ches completing various in-game quests. As the ecosystem grows, additional ways to earn token become available. These include participating in PvP games, providing liquidity, invitin referrals, using free lottery tickets, and receiving cashback from fees, alongside the original options of opening chests and completing quests.'
    }, {
        expanded: ExpandedEnum.panel2,
        title: 'How to earn tokens?',
        topPosition: 16,
        desc: 'Initially, users earn LTR and opening ches completing various in-game quests. As the ecosystem grows, additional ways to earn token become available. These include participating in PvP games, providing liquidity, invitin referrals, using free lottery tickets, and receiving cashback from fees, alongside the original options of opening chests and completing quests.'
    }, {
        expanded: ExpandedEnum.panel3,
        title: 'How to earn tokens?',
        topPosition: 34,
        desc: 'Initially, users earn LTR and opening ches completing various in-game quests. As the ecosystem grows, additional ways to earn token become available. These include participating in PvP games, providing liquidity, invitin referrals, using free lottery tickets, and receiving cashback from fees, alongside the original options of opening chests and completing quests.'
    }, {
        expanded: ExpandedEnum.panel4,
        title: 'How to earn tokens?',
        topPosition: 52,
        desc: 'Initially, users earn LTR and opening ches completing various in-game quests. As the ecosystem grows, additional ways to earn token become available. These include participating in PvP games, providing liquidity, invitin referrals, using free lottery tickets, and receiving cashback from fees, alongside the original options of opening chests and completing quests.'
    },
]

export const Faq = () => {

    const [expanded, setExpanded] = useState<ExpandedType | false>('panel4');

    const handleChange =
        (panel: ExpandedType) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <h2 className={style.Title}>
                    Questions
                </h2>
                <div className={style.AccordionWrapper}>
                    {faqData.map((item, index) => {
                        return (
                            <AccordionCustom title={item.title}
                                             top={item.topPosition}
                                             expanded={expanded === item.expanded}
                                             desc={item.desc}
                                             handleChangeAction={handleChange(item.expanded)} key={item.expanded}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

type AccordionCustomType = {
    handleChangeAction: (event: SyntheticEvent, isExpanded: boolean) => void;
    expanded: ExpandedType | boolean
    title: string
    desc: string
    top: number
}
const AccordionCustom: FC<AccordionCustomType> = ({handleChangeAction, title, desc, top, expanded}) => {

    return (
        <Accordion expanded={!!expanded}
                   className={`${style.Accordion} ${expanded ? style.AccordionOpen : ''}`}
                   style={{top: `-${top}px`}}
                   onChange={handleChangeAction}>
            <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={`${style.AccordionSummary} ${!expanded ? style.AccordionSummaryClosed : ''}`}
            >
                <p className={style.AccordionTitle}>{title}</p>
            </AccordionSummary>
            <AccordionDetails className={style.AccordionDetails}>
                <p className={style.Desc}>{desc}</p>
            </AccordionDetails>
        </Accordion>
    )
}