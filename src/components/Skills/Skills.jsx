import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";

const Skills = () => {

    const {t, i18n} = useTranslation();

    const tree = () => {
        let treeData = [
            {
                "name": "Root",
                "parent": "null",
                "_children": [
                    {
                        "name": "Web",
                        "parent": "Root",
                        "_children": [
                            {
                                "name": "Front End",
                                "parent": "Web",
                                "_children": [
                                    {
                                        "name": "HTML",
                                        "parent": "Front End",
                                        "_children": []
                                    },
                                    {
                                        "name": "CSS",
                                        "parent": "Front End",
                                        "_children": []
                                    },
                                    {
                                        "name": "Javascript",
                                        "parent": "Front End",
                                        "_children": [
                                            {
                                                "name": "ReactJS",
                                                "parent": "Javascript",
                                                "_children": []
                                            },
                                            {
                                                "name": "NextJS",
                                                "parent": "Javascript",
                                                "_children": []
                                            },
                                            {
                                                "name": "AdonisJS",
                                                "parent": "Javascript",
                                                "_children": []
                                            },
                                            {
                                                "name": "Node.js",
                                                "parent": "Javascript",
                                                "_children": []
                                            },
                                            {
                                                "name": "D3.js",
                                                "parent": "Javascript",
                                                "_children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Back End",
                                "parent": "Web",
                                "_children": [
                                    {
                                        "name": "PHP",
                                        "parent": "Back End",
                                        "_children": [
                                            {
                                                "name": "Symphony",
                                                "parent": "PHP",
                                                "_children": []
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Ruby",
                                        "parent": "Back End",
                                        "_children": []
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        "name": "Java",
                        "parent": "Root",
                        "_children": [
                            {
                                "name": "Spigot/Bukkit",
                                "parent": "Java",
                                "_children": []
                            },
                            {
                                "name": "Java SE 8 - 14",
                                "parent": "Java",
                                "_children": []
                            },
                            {
                                "name": "Applications",
                                "parent": "Java",
                                "_children": []
                            },
                            {
                                "name": "API",
                                "parent": "Java",
                                "_children": []
                            }
                        ]
                    },
                    {
                        "name": "Python",
                        "parent": "Root",
                        "_children": [
                            {
                                "name": "Python Socket",
                                "parent": "Python",
                                "_children": []
                            },
                            {
                                "name": "PyGame",
                                "parent": "Python",
                                "_children": []
                            },
                            {
                                "name": "Django",
                                "parent": "Python",
                                "_children": []
                            },
                            {
                                "name": "Rest API",
                                "parent": "Python",
                                "_children": []
                            }
                        ]
                    },
                    {
                        "name": "Workflow",
                        "parent": "Root",
                        "_children": [
                            {
                                "name": "Git",
                                "parent": "Workflow",
                                "_children": []
                            }
                        ]
                    },
                    {
                        "name": "Compiler",
                        "parent": "Root",
                        "_children": [
                            {
                                "name": "Maven",
                                "parent": "Compiler",
                                "_children": []
                            },
                            {
                                "name": "Gradle",
                                "parent": "Compiler",
                                "_children": []
                            }
                        ]
                    },

                ]
            }];


// ************** Generate the tree diagram  *****************
        let margin = {top: 40, right: 120, bottom: 40, left: 120},
            width = 1000 - margin.right - margin.left,
            height = 800 - margin.top - margin.bottom;

        let i = 0,
            duration = 750,
            root;


        let tree = d3.layout.tree()
            .size([height, width]);

        let diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

        let svg = d3.select(".tree").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        root = treeData[0];
        root.x0 = height / 2;
        root.y0 = 0;

        update(root);

        d3.select(self.frameElement).style("height", "500px");

        function update(source) {

            // Compute the new tree layout.
            let nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * 180;
            });

            // Update the nodes…
            let node = svg.selectAll("g.node")
                .data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });

            // Enter any new nodes at the parent's previous position.
            let nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", function (d) {
                    return d._children ? "white" : "lightgray";
                });

            nodeEnter.append("text")  // adjust parameters on next couple lines
                .attr("x", function (d) {
                    return d.children || d._children ? -5 : 14;
                })
                .attr("dy", "1.75em")
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position.
            let nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            nodeUpdate.select("circle")
                .attr("r", 15)
                .style("fill", function (d) {
                    return d._children ? "white" : "lightgray";
                });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            let nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            let link = svg.selectAll("path.link")
                .data(links, function (d) {
                    return d.target.id;
                });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    let o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    let o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

// Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }
    }

    useEffect(() => {
        tree()
    }, []);

    return (

        <div className="hero skills-container columns">

            <div className="lg:col-12">
                <div className="tree">

                </div>
            </div>
        </div>

    );

}

export default Skills;
