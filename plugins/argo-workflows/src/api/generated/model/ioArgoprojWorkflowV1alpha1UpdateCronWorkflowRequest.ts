// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojWorkflowV1alpha1CronWorkflow } from './ioArgoprojWorkflowV1alpha1CronWorkflow';

export class IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest {
    'cronWorkflow'?: IoArgoprojWorkflowV1alpha1CronWorkflow;
    /**
    * DEPRECATED: This field is ignored.
    */
    'name'?: string;
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cronWorkflow",
            "baseName": "cronWorkflow",
            "type": "IoArgoprojWorkflowV1alpha1CronWorkflow"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1UpdateCronWorkflowRequest.attributeTypeMap;
    }
}
