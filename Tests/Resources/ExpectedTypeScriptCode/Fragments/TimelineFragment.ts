import { ID, GraphSelection, SyrupOperation, copyWithTypeCondition } from "../GraphApi"

export namespace TimelineFragmentFragmentData {
  export interface PageInfo {
    __typename: 'PageInfo';
    /**
     * Indicates if there are more pages to fetch.
     */
    hasNextPage: boolean;
  }
  export interface EdgesNodeOther {
    __typename: '';
  }
  export interface EdgesNodeCommentEventAttachmentsImage {
    __typename: 'Image';
    /**
     * The location of the transformed image as a URL.
     * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
     * Otherwise any transformations which an image type does not support will be ignored.
     */
    transformedSrc: string;
  }
  export interface EdgesNodeCommentEventAttachments {
    __typename: 'CommentEventAttachment';
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * The filename of the comment event attachment.
     */
    name: string;
    /**
     * The size of the attachment.
     */
    size: number;
    /**
     * The file extension of the comment event attachment, indicating the file format.
     */
    fileExtension?: string | null;
    /**
     * The URL of the attachment.
     */
    url: string;
    /**
     * The image attached to the comment event.
     */
    image?: EdgesNodeCommentEventAttachmentsImage | null;
  }
  export interface EdgesNodeCommentEvent {
    __typename: 'CommentEvent';
    /**
     * Whether the comment event has been edited. If true, then the comment event has been edited.
     */
    edited: boolean;
    /**
     * Whether the comment event can be edited. If true, then the comment event can be edited.
     */
    canEdit: boolean;
    /**
     * Whether the comment event can be deleted. If true, then the comment event can be deleted.
     */
    canDelete: boolean;
    /**
     * The attachments associated with the comment event.
     */
    attachments: EdgesNodeCommentEventAttachments[];
  }
  export interface EdgesNode_BaseFields_ {
    /**
     * Globally unique identifier.
     */
    id: ID;
    /**
     * The date and time when the event was created.
     */
    createdAt: string;
    /**
     * Human readable text that describes the event.
     */
    message: string;
    /**
     * Whether the event was created by an app.
     */
    attributeToApp: boolean;
    /**
     * Whether the event was caused by an admin user.
     */
    attributeToUser: boolean;
    /**
     * Whether the event is critical.
     */
    criticalAlert: boolean;
  }
  export type EdgesNode = EdgesNode_BaseFields_ & (EdgesNodeCommentEvent | EdgesNodeOther)
  export interface Edges {
    __typename: 'EventEdge';
    /**
     * A cursor for use in pagination.
     */
    cursor: string;
    /**
     * The item at the end of EventEdge.
     */
    node: EdgesNode;
  }
}

export interface TimelineFragmentFragmentData {
  __typename: 'EventConnection';

  /**
   * Information to aid in pagination.
   */
  pageInfo: TimelineFragmentFragmentData.PageInfo;

  /**
   * A list of edges.
   */
  edges: TimelineFragmentFragmentData.Edges[];
}

export const timelineFragmentSelections: GraphSelection[] = ([
  {
    name: "__typename",
    alias: null,
    type: { name: "String", definedType: "Scalar" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "EventConnection", definedType: "Object" },
    directive: null,
    selections: ([] as GraphSelection[])
  }, 
  {
    name: "pageInfo",
    alias: null,
    type: { name: "PageInfo", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "EventConnection", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "__typename",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "PageInfo", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "hasNextPage",
        alias: null,
        type: { name: "Boolean", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "PageInfo", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }
    ] as GraphSelection[])
  }, 
  {
    name: "edges",
    alias: null,
    type: { name: "EventEdge", definedType: "Object" },
    arguments: {},
    passedGID: null,
    typeCondition: { name: "EventConnection", definedType: "Object" },
    directive: null,
    selections: ([
      {
        name: "__typename",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "EventEdge", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "cursor",
        alias: null,
        type: { name: "String", definedType: "Scalar" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "EventEdge", definedType: "Object" },
        directive: null,
        selections: ([] as GraphSelection[])
      }, 
      {
        name: "node",
        alias: null,
        type: { name: "Event", definedType: "Interface" },
        arguments: {},
        passedGID: null,
        typeCondition: { name: "EventEdge", definedType: "Object" },
        directive: null,
        selections: ([
          {
            name: "__typename",
            alias: null,
            type: { name: "String", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "id",
            alias: null,
            type: { name: "ID", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "createdAt",
            alias: null,
            type: { name: "DateTime", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "message",
            alias: null,
            type: { name: "FormattedString", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attributeToApp",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attributeToUser",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "criticalAlert",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "Event", definedType: "Interface" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "__typename",
            alias: null,
            type: { name: "String", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "edited",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "canEdit",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "canDelete",
            alias: null,
            type: { name: "Boolean", definedType: "Scalar" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([] as GraphSelection[])
          }, 
          {
            name: "attachments",
            alias: null,
            type: { name: "CommentEventAttachment", definedType: "Object" },
            arguments: {},
            passedGID: null,
            typeCondition: { name: "CommentEvent", definedType: "Object" },
            directive: null,
            selections: ([
              {
                name: "__typename",
                alias: null,
                type: { name: "String", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "id",
                alias: null,
                type: { name: "ID", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "name",
                alias: null,
                type: { name: "String", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "size",
                alias: null,
                type: { name: "Int", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "fileExtension",
                alias: null,
                type: { name: "String", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "url",
                alias: null,
                type: { name: "URL", definedType: "Scalar" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([] as GraphSelection[])
              }, 
              {
                name: "image",
                alias: null,
                type: { name: "Image", definedType: "Object" },
                arguments: {},
                passedGID: null,
                typeCondition: { name: "CommentEventAttachment", definedType: "Object" },
                directive: null,
                selections: ([
                  {
                    name: "__typename",
                    alias: null,
                    type: { name: "String", definedType: "Scalar" },
                    arguments: {},
                    passedGID: null,
                    typeCondition: { name: "Image", definedType: "Object" },
                    directive: null,
                    selections: ([] as GraphSelection[])
                  }, 
                  {
                    name: "transformedSrc",
                    alias: null,
                    type: { name: "URL", definedType: "Scalar" },
                    arguments: {},
                    passedGID: null,
                    typeCondition: { name: "Image", definedType: "Object" },
                    directive: null,
                    selections: ([] as GraphSelection[])
                  }
                ] as GraphSelection[])
              }
            ] as GraphSelection[])
          }
        ] as GraphSelection[])
      }
    ] as GraphSelection[])
  }
] as GraphSelection[])
