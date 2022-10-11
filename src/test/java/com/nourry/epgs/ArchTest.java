package com.nourry.epgs;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.nourry.epgs");

        noClasses()
            .that()
            .resideInAnyPackage("com.nourry.epgs.service..")
            .or()
            .resideInAnyPackage("com.nourry.epgs.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.nourry.epgs.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
